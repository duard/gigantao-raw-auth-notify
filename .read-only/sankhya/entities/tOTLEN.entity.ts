import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TotlimEntity } from './tOTLIM.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TOTLEN', ['codprod'], { unique: true })
@Entity('TOTLEN', { schema: 'SANKHYA' })
export class TotlenEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'TIPPROD', nullable: true, length: 20 })
  tipprod: string | null;

  @Column('char', { name: 'TIPMATERIAL', nullable: true, length: 20 })
  tipmaterial: string | null;

  @Column('char', { name: 'TIPLENTE', nullable: true, length: 20 })
  tiplente: string | null;

  @Column('char', { name: 'MATERIAL', nullable: true, length: 20 })
  material: string | null;

  @Column('char', { name: 'COR', nullable: true, length: 20 })
  cor: string | null;

  @Column('float', { name: 'INDICE', nullable: true, precision: 53 })
  indice: number | null;

  @Column('char', { name: 'GRUPOLENTE', length: 1, default: () => "'A'" })
  grupolente: string;

  @ManyToOne(() => TotlimEntity, (totlimEntity) => totlimEntity.totlens)
  @JoinColumn([{ name: 'CODLIMITE', referencedColumnName: 'codlimite' }])
  codlimite: TotlimEntity;

  @OneToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.totlen, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.totlens)
  @JoinColumn([{ name: 'CODPRODIND', referencedColumnName: 'codprod' }])
  codprodind: TgfproEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.totlens2)
  @JoinColumn([{ name: 'CODSERV', referencedColumnName: 'codprod' }])
  codserv: TgfproEntity;
}
