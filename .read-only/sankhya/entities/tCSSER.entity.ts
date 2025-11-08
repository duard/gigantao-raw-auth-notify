import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCSSER', ['codnat', 'codprod'], { unique: true })
@Entity('TCSSER', { schema: 'SANKHYA' })
export class TcsserEntity {
  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'LIMITANTE', length: 1, default: () => "'N'" })
  limitante: string;

  @Column('money', { name: 'QTDEPREVISTA', nullable: true })
  qtdeprevista: number | null;

  @Column('smallint', { name: 'FREQUENCIA', nullable: true })
  frequencia: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'P'" })
  tipo: string;

  @Column('char', { name: 'USAOSPORTAL', length: 1, default: () => "'S'" })
  usaosportal: string;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcssers)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcssers)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
