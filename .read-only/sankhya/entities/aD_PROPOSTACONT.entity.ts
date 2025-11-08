import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { AdPropostaEntity } from './aD_PROPOSTA.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_AD_PROPOSTACONT', ['numcontrato', 'idpropcont'], { unique: true })
@Entity('AD_PROPOSTACONT', { schema: 'SANKHYA' })
export class AdPropostacontEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'IDPROPCONT' })
  idpropcont: number;

  @Column('int', { name: 'VERSAO' })
  versao: number;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('int', { name: 'RECISAO', nullable: true })
  recisao: number | null;

  @Column('varchar', { name: 'FORMAPGTO', nullable: true, length: 100 })
  formapgto: string | null;

  @Column('varchar', { name: 'DIASPAGAR', nullable: true, length: 100 })
  diaspagar: string | null;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.adPropostaconts)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(
    () => TcsconEntity,
    (tcsconEntity) => tcsconEntity.adPropostaconts2,
  )
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato3: TcsconEntity;

  @ManyToOne(
    () => AdPropostaEntity,
    (adPropostaEntity) => adPropostaEntity.adPropostaconts,
  )
  @JoinColumn([{ name: 'CODPROP', referencedColumnName: 'codprop' }])
  codprop: AdPropostaEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adPropostaconts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
