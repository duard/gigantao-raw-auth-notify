import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwaraEntity } from './tGWARA.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGWAXP', ['nuarea', 'codprod', 'controle'], { unique: true })
@Entity('TGWAXP', { schema: 'SANKHYA' })
export class TgwaxpEntity {
  @Column('int', { primary: true, name: 'NUAREA' })
  nuarea: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 40,
    default: () => "' '",
  })
  controle: string;

  @Column('datetime', { name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @ManyToOne(() => TgwaraEntity, (tgwaraEntity) => tgwaraEntity.tgwaxps)
  @JoinColumn([{ name: 'NUAREA', referencedColumnName: 'nuarea' }])
  nuarea2: TgwaraEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwaxps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
