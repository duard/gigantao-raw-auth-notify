import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprhsmpEntity } from './tPRHSMP.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TPRESTSMP', ['codestsmp'], { unique: true })
@Entity('TPRESTSMP', { schema: 'SANKHYA' })
export class TprestsmpEntity {
  @Column('int', { primary: true, name: 'CODESTSMP' })
  codestsmp: number;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 40 })
  controle: string | null;

  @Column('date', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('float', { name: 'ESTOQUE', precision: 53 })
  estoque: number;

  @ManyToOne(() => TprhsmpEntity, (tprhsmpEntity) => tprhsmpEntity.tprestsmps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODHSMP', referencedColumnName: 'codhsmp' }])
  codhsmp: TprhsmpEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tprestsmps)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprestsmps)
  @JoinColumn([{ name: 'CODPRODMP', referencedColumnName: 'codprod' }])
  codprodmp: TgfproEntity;
}
