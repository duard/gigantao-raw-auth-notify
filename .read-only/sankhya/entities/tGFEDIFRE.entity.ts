import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgffreEntity } from './tGFFRE.entity';

@Index('PK_TGFEDIFRE', ['nuedi'], { unique: true })
@Index('TGFEDIFRE_I01', ['codparctransp'], {})
@Index('TGFEDIFRE_I02', ['dhimportacao'], {})
@Index('TGFEDIFRE_I03', ['codemp', 'ordemcarga'], {})
@Entity('TGFEDIFRE', { schema: 'SANKHYA' })
export class TgfedifreEntity {
  @Column('int', { primary: true, name: 'NUEDI' })
  nuedi: number;

  @Column('datetime', { name: 'DHIMPORTACAO', default: () => 'getdate()' })
  dhimportacao: Date;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('varchar', { name: 'NOMEARQUIVO', nullable: true, length: 255 })
  nomearquivo: string | null;

  @Column('smallint', { name: 'QTDCTRC', nullable: true })
  qtdctrc: number | null;

  @Column('float', { name: 'VLRCTRCS', nullable: true, precision: 53 })
  vlrctrcs: number | null;

  @Column('smallint', { name: 'QTDNOTAS', nullable: true })
  qtdnotas: number | null;

  @Column('float', { name: 'VLRNOTAS', nullable: true, precision: 53 })
  vlrnotas: number | null;

  @Column('float', { name: 'VLRFRETENFS', nullable: true, precision: 53 })
  vlrfretenfs: number | null;

  @Column('int', { name: 'NURENEG', nullable: true })
  nureneg: number | null;

  @Column('int', { name: 'CODPARCTRANSP', nullable: true })
  codparctransp: number | null;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @OneToMany(() => TgffreEntity, (tgffreEntity) => tgffreEntity.nuedi2)
  tgffres: TgffreEntity[];
}
