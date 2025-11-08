import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcsfeeEntity } from './tCSFEE.entity';
import { TcsfeqEntity } from './tCSFEQ.entity';
import { TcsmfuEntity } from './tCSMFU.entity';

@Index('PK_TCSTFU', ['codtipfuncao'], { unique: true })
@Entity('TCSTFU', { schema: 'SANKHYA' })
export class TcstfuEntity {
  @Column('smallint', { primary: true, name: 'CODTIPFUNCAO' })
  codtipfuncao: number;

  @Column('char', { name: 'NOMEFUNCAO', length: 20 })
  nomefuncao: string;

  @Column('char', { name: 'DESCRFUNCAO', length: 120 })
  descrfuncao: string;

  @Column('char', { name: 'ABREVFUNCAO', length: 3 })
  abrevfuncao: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'N'" })
  ativo: string;

  @OneToMany(() => TcsfeeEntity, (tcsfeeEntity) => tcsfeeEntity.codtipfuncao2)
  tcsfees: TcsfeeEntity[];

  @OneToMany(() => TcsfeqEntity, (tcsfeqEntity) => tcsfeqEntity.codtipfuncao2)
  tcsfeqs: TcsfeqEntity[];

  @OneToMany(() => TcsmfuEntity, (tcsmfuEntity) => tcsmfuEntity.codtipfuncao2)
  tcsmfus: TcsmfuEntity[];
}
