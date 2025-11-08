import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfregEntity } from './tGFREG.entity';

@Index(
  'PK_TGFITR',
  ['codregra', 'codinstprinc', 'codinstsecini', 'codinstsecfin'],
  {
    unique: true,
  },
)
@Entity('TGFITR', { schema: 'SANKHYA' })
export class TgfitrEntity {
  @Column('int', { primary: true, name: 'CODREGRA' })
  codregra: number;

  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODINSTPRINC' })
  codinstprinc: number;

  @Column('int', { primary: true, name: 'CODINSTSECINI', default: () => '(0)' })
  codinstsecini: number;

  @Column('int', { primary: true, name: 'CODINSTSECFIN', default: () => '(0)' })
  codinstsecfin: number;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { name: 'CODINSTPRINCFIN', nullable: true })
  codinstprincfin: number | null;

  @ManyToOne(() => TgfregEntity, (tgfregEntity) => tgfregEntity.tgfitrs)
  @JoinColumn([{ name: 'CODREGRA', referencedColumnName: 'codregra' }])
  codregra2: TgfregEntity;
}
