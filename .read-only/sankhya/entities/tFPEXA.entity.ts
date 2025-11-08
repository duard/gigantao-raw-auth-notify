import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpasoEntity } from './tFPASO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPEXA', ['nuaso', 'seqexame'], { unique: true })
@Entity('TFPEXA', { schema: 'SANKHYA' })
export class TfpexaEntity {
  @Column('int', { primary: true, name: 'NUASO' })
  nuaso: number;

  @Column('smallint', { primary: true, name: 'SEQEXAME' })
  seqexame: number;

  @Column('datetime', { name: 'DTEXAME' })
  dtexame: Date;

  @Column('varchar', { name: 'DESCREXAME', nullable: true, length: 80 })
  descrexame: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', { name: 'DTVENCIMENTO', nullable: true })
  dtvencimento: Date | null;

  @Column('varchar', { name: 'CRM', nullable: true, length: 10 })
  crm: string | null;

  @Column('varchar', { name: 'UFCRM', nullable: true, length: 2 })
  ufcrm: string | null;

  @Column('varchar', { name: 'CNPJLAB', nullable: true, length: 14 })
  cnpjlab: string | null;

  @Column('char', { name: 'TOXICOLOGICO', length: 1, default: () => "'N'" })
  toxicologico: string;

  @Column('varchar', { name: 'CNPJBASE36', nullable: true, length: 6 })
  cnpjbase36: string | null;

  @Column('varchar', { name: 'SERIALSEQ', nullable: true, length: 2 })
  serialseq: string | null;

  @Column('varchar', { name: 'CODEXAME', nullable: true, length: 17 })
  codexame: string | null;

  @Column('int', { name: 'CODEXAMEESOCIAL', nullable: true })
  codexameesocial: number | null;

  @Column('smallint', { name: 'ORDEXAME', nullable: true })
  ordexame: number | null;

  @Column('smallint', { name: 'INDRESULT', nullable: true })
  indresult: number | null;

  @Column('varchar', { name: 'NMMED', nullable: true, length: 70 })
  nmmed: string | null;

  @Column('smallint', { name: 'DIASVENC', nullable: true })
  diasvenc: number | null;

  @Column('varchar', { name: 'RECIBOESOCIAL', nullable: true, length: 30 })
  reciboesocial: string | null;

  @ManyToOne(() => TfpasoEntity, (tfpasoEntity) => tfpasoEntity.tfpexas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUASO', referencedColumnName: 'nuaso' }])
  nuaso2: TfpasoEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpexas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
