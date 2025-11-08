import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfstmvEntity } from './tGFSTMV.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFSTMVH', ['codemp', 'referencia', 'nrounico', 'dhprocess'], {
  unique: true,
})
@Entity('TGFSTMVH', { schema: 'SANKHYA' })
export class TgfstmvhEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('int', { primary: true, name: 'NROUNICO' })
  nrounico: number;

  @Column('datetime', { primary: true, name: 'DHPROCESS' })
  dhprocess: Date;

  @Column('text', { name: 'CONFIG' })
  config: string;

  @Column('char', {
    name: 'AUTOMATICO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  automatico: string | null;

  @ManyToOne(() => TgfstmvEntity, (tgfstmvEntity) => tgfstmvEntity.tgfstmvhs)
  @JoinColumn([{ name: 'NROUNICO', referencedColumnName: 'nrounico' }])
  nrounico2: TgfstmvEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfstmvhs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
