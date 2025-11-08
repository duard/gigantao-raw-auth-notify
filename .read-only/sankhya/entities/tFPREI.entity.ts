import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPREI', ['codreint'], { unique: true })
@Index('TFPREI_I01', ['codemp', 'codfunc', 'dtefetretorno'], { unique: true })
@Entity('TFPREI', { schema: 'SANKHYA' })
export class TfpreiEntity {
  @Column('int', { primary: true, name: 'CODREINT' })
  codreint: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { name: 'TPREINT' })
  tpreint: number;

  @Column('varchar', { name: 'PROCJUD', nullable: true, length: 20 })
  procjud: string | null;

  @Column('smallint', { name: 'LEIANISTIA', nullable: true })
  leianistia: number | null;

  @Column('datetime', { name: 'DTEFETRETORNO' })
  dtefetretorno: Date;

  @Column('datetime', { name: 'DTEFEITO', nullable: true })
  dtefeito: Date | null;

  @Column('char', { name: 'INDPAGTOJUIZO', length: 1, default: () => "'N'" })
  indpagtojuizo: string;

  @Column('smallint', { name: 'CODHISTOCOR' })
  codhistocor: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;
}
