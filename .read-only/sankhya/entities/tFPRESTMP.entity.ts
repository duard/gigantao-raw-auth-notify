import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPRESTMP', ['codemp', 'codfunc', 'uuid'], { unique: true })
@Entity('TFPRESTMP', { schema: 'SANKHYA' })
export class TfprestmpEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { primary: true, name: 'UUID', length: 50 })
  uuid: string;
}
