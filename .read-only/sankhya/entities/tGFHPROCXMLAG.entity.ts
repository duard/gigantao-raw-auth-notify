import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFHPROCXMLAG', ['nuagendproc', 'tipoage', 'dhexec'], {
  unique: true,
})
@Entity('TGFHPROCXMLAG', { schema: 'SANKHYA' })
export class TgfhprocxmlagEntity {
  @Column('int', { primary: true, name: 'NUAGENDPROC' })
  nuagendproc: number;

  @Column('varchar', { primary: true, name: 'TIPOAGE', length: 3 })
  tipoage: string;

  @Column('datetime', { primary: true, name: 'DHEXEC' })
  dhexec: Date;

  @Column('text', { name: 'MSG', nullable: true })
  msg: string | null;

  @Column('int', { name: 'QTDSUCESSO', nullable: true })
  qtdsucesso: number | null;

  @Column('int', { name: 'QTDERRO', nullable: true })
  qtderro: number | null;

  @Column('int', { name: 'QTDTOT', nullable: true })
  qtdtot: number | null;
}
