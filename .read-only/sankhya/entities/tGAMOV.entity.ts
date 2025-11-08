import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGAMOV', ['nunota', 'sequencia', 'tipmov'], { unique: true })
@Index('TGAMOV_I01', ['numcontrato'], {})
@Entity('TGAMOV', { schema: 'SANKHYA' })
export class TgamovEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTNEG' })
  dtneg: Date;

  @Column('float', { name: 'QTDNEG', precision: 53 })
  qtdneg: number;

  @Column('smallint', { name: 'ATUALESTOQUE' })
  atualestoque: number;

  @Column('datetime', { name: 'DTREFENT', nullable: true })
  dtrefent: Date | null;

  @Column('datetime', { name: 'DTREFCOB', nullable: true })
  dtrefcob: Date | null;

  @Column('char', {
    primary: true,
    name: 'TIPMOV',
    length: 1,
    default: () => "'E'",
  })
  tipmov: string;

  @Column('int', { name: 'NUMCONTRATO', default: () => '(0)' })
  numcontrato: number;

  @Column('varchar', { name: 'CONTROLE', length: 16, default: () => "' '" })
  controle: string;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgamovs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgamovs)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgamovs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
