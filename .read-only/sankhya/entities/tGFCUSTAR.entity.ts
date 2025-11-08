import { Column, Entity, Index } from 'typeorm';

@Index('PK__TGFCUSTAR__36AAF955', ['codprod', 'codemp', 'dtatual'], {
  unique: true,
})
@Entity('TGFCUSTAR', { schema: 'SANKHYA' })
export class TgfcustarEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'DTATUAL' })
  dtatual: Date;

  @Column('float', { name: 'CUSAPURADO', precision: 53 })
  cusapurado: number;
}
