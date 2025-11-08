import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprftlEntity } from './tPRFTL.entity';

@Index('PK_TPRVFTL', ['idformula', 'nomevar'], { unique: true })
@Entity('TPRVFTL', { schema: 'SANKHYA' })
export class TprvftlEntity {
  @Column('int', { primary: true, name: 'IDFORMULA' })
  idformula: number;

  @Column('varchar', { primary: true, name: 'NOMEVAR', length: 20 })
  nomevar: string;

  @Column('varchar', { name: 'EXPRESSAO', nullable: true, length: 255 })
  expressao: string | null;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @ManyToOne(() => TprftlEntity, (tprftlEntity) => tprftlEntity.tprvftls)
  @JoinColumn([{ name: 'IDFORMULA', referencedColumnName: 'idformula' }])
  idformula2: TprftlEntity;
}
