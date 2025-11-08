import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPSNUM', ['codemp', 'chave'], { unique: true })
@Index('TFPSNUM_I01', ['codemp'], {})
@Entity('TFPSNUM', { schema: 'SANKHYA' })
export class TfpsnumEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 50 })
  chave: string;

  @Column('int', { name: 'ULTCODIGO' })
  ultcodigo: number;
}
