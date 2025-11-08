import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfgalEntity } from './tGFGAL.entity';

@Index('PK_TGFIGA', ['galao', 'lote', 'ano', 'sequencia'], { unique: true })
@Entity('TGFIGA', { schema: 'SANKHYA' })
export class TgfigaEntity {
  @Column('smallint', { primary: true, name: 'GALAO' })
  galao: number;

  @Column('smallint', { primary: true, name: 'LOTE' })
  lote: number;

  @Column('smallint', { primary: true, name: 'ANO' })
  ano: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', {
    name: 'DTMOV',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dtmov: Date;

  @Column('float', { name: 'PESOBRUTO', precision: 53, default: () => '(0)' })
  pesobruto: number;

  @Column('float', { name: 'PESOTARA', precision: 53, default: () => '(0)' })
  pesotara: number;

  @Column('float', { name: 'PESOLIQUIDO', precision: 53, default: () => '(0)' })
  pesoliquido: number;

  @Column('datetime', { name: 'DTENVASE', default: () => 'getdate()' })
  dtenvase: Date;

  @Column('int', { name: 'QTDFIBRINA', nullable: true, default: () => '(0)' })
  qtdfibrina: number | null;

  @Column('int', {
    name: 'QTDQUALIDADE2',
    nullable: true,
    default: () => '(0)',
  })
  qtdqualidade2: number | null;

  @Column('int', { name: 'QTDREJEITADA', nullable: true, default: () => '(0)' })
  qtdrejeitada: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfigas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfigas)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfgalEntity, (tgfgalEntity) => tgfgalEntity.tgfigas)
  @JoinColumn([
    { name: 'GALAO', referencedColumnName: 'galao' },
    { name: 'LOTE', referencedColumnName: 'lote' },
    { name: 'ANO', referencedColumnName: 'ano' },
  ])
  tgfgal: TgfgalEntity;
}
