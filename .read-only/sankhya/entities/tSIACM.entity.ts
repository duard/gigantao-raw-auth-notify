import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsirlgEntity } from './tSIRLG.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIACM', ['codusu', 'seqacesso', 'dhacesso'], { unique: true })
@Entity('TSIACM', { schema: 'SANKHYA' })
export class TsiacmEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('int', { primary: true, name: 'SEQACESSO' })
  seqacesso: number;

  @Column('datetime', { primary: true, name: 'DHACESSO' })
  dhacesso: Date;

  @Column('varchar', { name: 'RESOURCEID', length: 256 })
  resourceid: string;

  @Column('varchar', { name: 'CAMINHO', length: 3103 })
  caminho: string;

  @Column('varchar', { name: 'DESCRMENU', length: 200 })
  descrmenu: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiacms)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsirlgEntity, (tsirlgEntity) => tsirlgEntity.tsiacms)
  @JoinColumn([
    { name: 'CODUSU', referencedColumnName: 'codusu' },
    { name: 'SEQACESSO', referencedColumnName: 'seqacesso' },
  ])
  tsirlg: TsirlgEntity;
}
