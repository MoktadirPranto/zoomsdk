import { Component } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent {

async ngAfterContentInit(): Promise<any>{
  const{ZoomMtg}=await import('@zoomus/websdk');

  ZoomMtg.setZoomJSLib('https://source.zoom.us/lib', '/av');
  ZoomMtg.preLoadWasm();
  ZoomMtg.prepareWebSDK();

  let payload={
    meetingNumber:'86818119925',
    passWord:'3JUTs5',
    sdkKey:'OTtBL10IR2GhEROMfoUZRg',
    sdkSecret:'cm1XOFmyJAHCnR3W8va74AXu6l1TT2iz',
    userName:'Pranto',
    userEmail:'',
    role:'0',
    leaveUrl:'http://localhost:4200'
  };
ZoomMtg.generateSDKSignature({
  meetingNumber:payload.meetingNumber,
  role:payload.role,
  sdkKey:payload.sdkKey,
  sdkSecret:payload.sdkSecret,
  success:function(signature:any)
  {
ZoomMtg.init({
  leaveUrl:payload.leaveUrl,
  success:function(data:any){
    ZoomMtg.join({
      meetingNumber:payload.meetingNumber,
      passWord:payload.passWord,
      sdkKey:payload.sdkKey,
      userName:payload.userName,
      userEmail:payload.userEmail,
      signature:signature.result,
      tk:'',
      success:function(data:any){
        console.log(data);
      },
      error:function(error:any){
        console.log('----ERROR Joining----', error);

      }
    })
  },
  error:function(error:any){

    console.log('---errorInit-->',error);

  }
})
  },
  error:function(error:any){
    console.log(error);

  }

})

}

}
