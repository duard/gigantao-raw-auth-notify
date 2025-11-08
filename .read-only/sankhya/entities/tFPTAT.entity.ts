import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsicidEntity } from './tSICID.entity';
import { TsiendEntity } from './tSIEND.entity';

@Index('PK_TFPTAT', ['nucat', 'sequencia'], { unique: true })
@Entity('TFPTAT', { schema: 'SANKHYA' })
export class TfptatEntity {
  @Column('int', { primary: true, name: 'NUCAT' })
  nucat: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NOMETESTEMUNHA', length: 60 })
  nometestemunha: string;

  @Column('varchar', { name: 'NUMEND', length: 10 })
  numend: string;

  @Column('smallint', { name: 'CODBAI' })
  codbai: number;

  @Column('varchar', { name: 'CEP', length: 8 })
  cep: string;

  @Column('varchar', { name: 'TELEFONE', length: 15 })
  telefone: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfptats)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tfptats)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tfptats)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend: TsiendEntity;
}
