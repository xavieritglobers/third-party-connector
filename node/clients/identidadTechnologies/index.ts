import { InstanceOptions, IOContext, ExternalClient  } from "@vtex/api";
var axios = require('axios');
var qs = require('qs');





export class IdentidadTechnologiesClient extends ExternalClient  {
    
    constructor (context: IOContext, options?: InstanceOptions) {
        super('http://example.com', context, options)
      }

      private getITToken = async () =>{

        let token =""
     

        var config = {
          method: 'get',
          url: 'https://api.identidadsms.net/rest/auth',
          headers: { 
            'Authorization': 'Basic ai5oZXJuYW5kZXouZ0Bjb29waWRyb2dhcy5jb20uY286RWNvbW1lcmNlMjEq'
          }
        };
        
        await axios(config)
        .then(function (response:any) {
          
            token = response.data.token
          
        })
        .catch(function (error:any) {

            throw new Error("NO TOKEN"+error);
            
        });
        
            return token
      }

     public sendSMS = async (orderid:string,prevStatus:string,nextStatus:string,phone:string)=>
      {
            
            let msg = ""
           if(prevStatus==='No Definido')
                msg = ` Hemos creado una nueva solicitud de devolución con id: ${orderid}` 
           else
                msg = `La solicitud de devolución con id: ${orderid} fue actualizada a ${nextStatus}. `

            

           const token =  await this.getITToken()
          
           if(token!=="")
           {

            var data = qs.stringify({
                acc_id: "11294",
                to: phone,
                from: "Copidrogas",
                message: msg
              });
              var config = {
                method: "post",
                url: "https://api.identidadsms.net/rest/send_sms",
                headers: {
                  Authorization:
                    `Bearer ${token}`,
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                data: data
              };
              
                await axios(config)
                
            }
        }
          
}