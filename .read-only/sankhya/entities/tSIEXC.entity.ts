import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiclaEntity } from './tSICLA.entity';

@Index('PK_TSIEXC', ['nometab', 'nomecampo', 'codcla', 'codusu'], {
  unique: true,
})
@Entity('TSIEXC', { schema: 'SANKHYA' })
export class TsiexcEntity {
  @Column('varchar', { primary: true, name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('varchar', { primary: true, name: 'NOMECAMPO', length: 32 })
  nomecampo: string;

  @Column('smallint', { primary: true, name: 'CODCLA' })
  codcla: number;

  @Column('char', { name: 'TIPOVISU', length: 1 })
  tipovisu: string;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsiexcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TsiclaEntity, (tsiclaEntity) => tsiclaEntity.tsiexcs)
  @JoinColumn([{ name: 'CODCLA', referencedColumnName: 'codcla' }])
  codcla2: TsiclaEntity;
}
