import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimimvEntity } from './tIMIMV.entity';

@Index('PK_TIMILC', ['ilcimovel', 'ilccodigo'], { unique: true })
@Entity('TIMILC', { schema: 'SANKHYA' })
export class TimilcEntity {
  @Column('int', { primary: true, name: 'ILCCODIGO' })
  ilccodigo: number;

  @Column('int', { primary: true, name: 'ILCIMOVEL' })
  ilcimovel: number;

  @Column('datetime', { name: 'ILCDATA', nullable: true })
  ilcdata: Date | null;

  @Column('datetime', { name: 'ILCINICIO', nullable: true })
  ilcinicio: Date | null;

  @Column('smallint', { name: 'ILCQTDDIAS', nullable: true })
  ilcqtddias: number | null;

  @Column('char', { name: 'ILCLEGADO', nullable: true, length: 1 })
  ilclegado: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timilcs)
  @JoinColumn([{ name: 'ILCUSUARIO', referencedColumnName: 'codusu' }])
  ilcusuario: TsiusuEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timilcs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'ILCIMOVEL', referencedColumnName: 'imvcodigo' }])
  ilcimovel2: TimimvEntity;
}
