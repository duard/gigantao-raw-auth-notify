import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFHPROCXML', ['nuagendproc'], { unique: true })
@Entity('TGFHPROCXML', { schema: 'SANKHYA' })
export class TgfhprocxmlEntity {
  @Column('int', { primary: true, name: 'NUAGENDPROC' })
  nuagendproc: number;

  @Column('varchar', { name: 'TIPOAGE', length: 3 })
  tipoage: string;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('int', { name: 'QTDSUCESSO', nullable: true })
  qtdsucesso: number | null;

  @Column('int', { name: 'QTDERRO', nullable: true })
  qtderro: number | null;

  @Column('int', { name: 'QTDTOT', nullable: true })
  qtdtot: number | null;
}
