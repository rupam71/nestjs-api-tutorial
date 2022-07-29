import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop({required: true})
  name: string;

  @Prop()
  age: number;

  @Prop({required: true})
  email: string;

  @Prop([String])
  token: string[];

}

export const AuthSchema = SchemaFactory.createForClass(Auth);
