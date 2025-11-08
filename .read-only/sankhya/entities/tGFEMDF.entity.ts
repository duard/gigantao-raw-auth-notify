import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiufsEntity } from './tSIUFS.entity';
import { TgfmdfeEntity } from './tGFMDFE.entity';
import { TsicidEntity } from './tSICID.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFEMDF', ['nuviag', 'seqmdfe', 'seqeve', 'codeve'], {
  unique: true,
})
@Entity('TGFEMDF', { schema: 'SANKHYA' })
export class TgfemdfEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('smallint', { primary: true, name: 'SEQMDFE' })
  seqmdfe: number;

  @Column('smallint', { primary: true, name: 'SEQEVE' })
  seqeve: number;

  @Column('varchar', {
    primary: true,
    name: 'CODEVE',
    length: 6,
    default: () => "'0'",
  })
  codeve: string;

  @Column('varchar', { name: 'DESCREVE', length: 255 })
  descreve: string;

  @Column('datetime', { name: 'DHRECIBO' })
  dhrecibo: Date;

  @Column('varchar', { name: 'NRORECIBO', length: 15 })
  nrorecibo: string;

  @Column('varchar', { name: 'CODSTATUS', length: 3 })
  codstatus: string;

  @Column('text', { name: 'DESCRSTATUS', nullable: true })
  descrstatus: string | null;

  @Column('varchar', { name: 'JUSTEVE', length: 255 })
  justeve: string;

  @Column('text', { name: 'XML' })
  xml: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('text', { name: 'XMLPROT', nullable: true })
  xmlprot: string | null;

  @Column('varchar', { name: 'AVERBADOTMS', nullable: true, length: 10 })
  averbadotms: string | null;

  @Column('varchar', { name: 'PROTOCOLO', nullable: true, length: 100 })
  protocolo: string | null;

  @Column('datetime', { name: 'DHPROTOCOLO', nullable: true })
  dhprotocolo: Date | null;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tgfemdfs)
  @JoinColumn([{ name: 'UFEVE', referencedColumnName: 'coduf' }])
  ufeve: TsiufsEntity;

  @ManyToOne(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.tgfemdfs)
  @JoinColumn([
    { name: 'NUVIAG', referencedColumnName: 'nuviag' },
    { name: 'SEQMDFE', referencedColumnName: 'seqmdfe' },
  ])
  tgfmdfe: TgfmdfeEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tgfemdfs)
  @JoinColumn([{ name: 'CODCIDEVE', referencedColumnName: 'codcid' }])
  codcideve: TsicidEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfemdfs)
  @JoinColumn([{ name: 'CODMOTORISTA', referencedColumnName: 'codparc' }])
  codmotorista: TgfparEntity;
}
