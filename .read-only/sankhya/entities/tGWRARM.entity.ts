import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfgruEntity } from './tGFGRU.entity';

@Index('PK_TGWRARM', ['codligacao'], { unique: true })
@Index('TGWRARM_I01', ['codprod1'], {})
@Index('TGWRARM_I02', ['codgrupoprod1'], {})
@Index('TGWRARM_I03', ['marca1'], {})
@Index('TGWRARM_I04', ['codprod2'], {})
@Index('TGWRARM_I05', ['codgrupoprod2'], {})
@Index('TGWRARM_I06', ['marca2'], {})
@Entity('TGWRARM', { schema: 'SANKHYA' })
export class TgwrarmEntity {
  @Column('int', { name: 'CODPROD1', nullable: true })
  codprod1: number | null;

  @Column('int', { name: 'CODGRUPOPROD1', nullable: true })
  codgrupoprod1: number | null;

  @Column('varchar', { name: 'MARCA1', nullable: true, length: 10 })
  marca1: string | null;

  @Column('int', { name: 'CODPROD2', nullable: true })
  codprod2: number | null;

  @Column('int', { name: 'CODGRUPOPROD2', nullable: true })
  codgrupoprod2: number | null;

  @Column('varchar', { name: 'MARCA2', nullable: true, length: 10 })
  marca2: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('int', { primary: true, name: 'CODLIGACAO' })
  codligacao: number;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwrarms)
  @JoinColumn([{ name: 'CODPROD2', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwrarms2)
  @JoinColumn([{ name: 'CODPROD1', referencedColumnName: 'codprod' }])
  codprod3: TgfproEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgwrarms)
  @JoinColumn([{ name: 'CODGRUPOPROD1', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod: TgfgruEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgwrarms2)
  @JoinColumn([{ name: 'CODGRUPOPROD2', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod3: TgfgruEntity;
}
