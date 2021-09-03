/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { IOClients } from '@vtex/api'
import { IdentidadTechnologiesClient } from './identidadTechnologies'
import { MercadoPagoClient } from './mercadoPago'


export class Clients extends IOClients {

  public get identidadTechnologies()
  {
    return this.getOrSet('identidadTechnologies', IdentidadTechnologiesClient )
  }

  public get mercadoPago()
  {
    return this.getOrSet('mercadoPago', MercadoPagoClient )
  }

 
 

}
