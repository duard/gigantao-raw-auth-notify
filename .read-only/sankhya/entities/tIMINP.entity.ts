import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsimodEntity } from './tSIMOD.entity';
import { TimipoEntity } from './tIMIPO.entity';

@Index('PK_TIMINP', ['inpcodigo'], { unique: true })
@Entity('TIMINP', { schema: 'SANKHYA' })
export class TiminpEntity {
  @Column('int', { primary: true, name: 'INPCODIGO' })
  inpcodigo: number;

  @Column('varchar', { name: 'INPNOMEINTEGRACAO', length: 100 })
  inpnomeintegracao: string;

  @Column('varchar', { name: 'INPVIEW', length: 50 })
  inpview: string;

  @ManyToOne(() => TsimodEntity, (tsimodEntity) => tsimodEntity.timinps)
  @JoinColumn([{ name: 'INPMODULOJAVA', referencedColumnName: 'codmodulo' }])
  inpmodulojava: TsimodEntity;

  @OneToMany(() => TimipoEntity, (timipoEntity) => timipoEntity.ipointegracao2)
  timipos: TimipoEntity[];
}
