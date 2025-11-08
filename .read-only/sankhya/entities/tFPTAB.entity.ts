import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPTAB', ['referencia', 'tiptab'], { unique: true })
@Entity('TFPTAB', { schema: 'SANKHYA' })
export class TfptabEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('char', { primary: true, name: 'TIPTAB', length: 1 })
  tiptab: string;

  @Column('money', { name: 'SALMIN', nullable: true })
  salmin: number | null;

  @Column('money', { name: 'LIMSALFAM', nullable: true })
  limsalfam: number | null;

  @Column('float', { name: 'FAIXA1_SALFAM', nullable: true, precision: 53 })
  faixa1Salfam: number | null;

  @Column('float', { name: 'FAIXA2_SALFAM', nullable: true, precision: 53 })
  faixa2Salfam: number | null;

  @Column('money', { name: 'SALREF', nullable: true })
  salref: number | null;

  @Column('float', { name: 'DESCINATIVO', nullable: true, precision: 53 })
  descinativo: number | null;

  @Column('float', { name: 'DEDDEPENDIRF', nullable: true, precision: 53 })
  deddependirf: number | null;

  @Column('money', { name: 'BASETETOINSS', nullable: true })
  basetetoinss: number | null;
}
