import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPRCT', ['codreceita'], { unique: true })
@Entity('TFPRCT', { schema: 'SANKHYA' })
export class TfprctEntity {
  @Column('int', { primary: true, name: 'CODRECEITA' })
  codreceita: number;

  @Column('varchar', { name: 'DESCRECEITA', length: 150 })
  descreceita: string;

  @Column('varchar', { name: 'ALIQUOTA', length: 50 })
  aliquota: string;

  @Column('char', { name: 'TPRECEITA', length: 1 })
  tpreceita: string;
}
