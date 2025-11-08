import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';

@Index('PK_AD_CONTROLDOC', ['id'], { unique: true })
@Entity('AD_CONTROLDOC', { schema: 'SANKHYA' })
export class AdControldocEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'DOCUMENTO', nullable: true, length: 100 })
  documento: string | null;

  @Column('datetime', { name: 'DTEMISSAO', nullable: true })
  dtemissao: Date | null;

  @Column('datetime', { name: 'DTVENCIMENTO', nullable: true })
  dtvencimento: Date | null;

  @Column('datetime', { name: 'REFERENCIA', nullable: true })
  referencia: Date | null;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'DOCSUBSTITUTO', nullable: true })
  docsubstituto: number | null;

  @Column('varchar', { name: 'ALERTAVENCIMENTO', nullable: true, length: 10 })
  alertavencimento: string | null;

  @Column('varchar', { name: 'EMAILNOTIFICACAO', nullable: true, length: 100 })
  emailnotificacao: string | null;

  @Column('int', { name: 'DIASALERTA', nullable: true })
  diasalerta: number | null;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 10 })
  ativo: string | null;

  @OneToOne(
    () => AdControldocEntity,
    (adControldocEntity) => adControldocEntity.adControldoc,
  )
  @JoinColumn([{ name: 'ID', referencedColumnName: 'id' }])
  adControldoc: AdControldocEntity;
}
