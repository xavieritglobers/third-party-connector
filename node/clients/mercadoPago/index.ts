import { InstanceOptions, IOContext, ExternalClient  } from "@vtex/api";
var axios = require('axios');
var qs = require('qs');



export class MercadoPagoClient extends ExternalClient  {
    
    constructor (context: IOContext, options?: InstanceOptions) {
        super('http://example.com', context, options)
      }


      public  refundMP = async (id:string,amount:number)=>{

       


const data =qs.stringify({
    amount:amount
   });
var config = {
    method: 'post',
    url: `https://api.mercadopago.com/v1/payments/${id}/refunds`,
    headers: { 
      'Authorization': 'Bearer TEST-3979278279456437-073014-8cfe01486a4883915c2082681c232a01-616319962'
    }, 
    data:data
  };

  



         await axios(config)


         
           

      }

 }