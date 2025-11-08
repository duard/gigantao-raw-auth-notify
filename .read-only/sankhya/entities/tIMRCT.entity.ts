import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimctrEntity } from './tIMCTR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TIMRCT', ['rctcodigo'], { unique: true })
@Entity('TIMRCT', { schema: 'SANKHYA' })
export class TimrctEntity {
  @Column('int', { primary: true, name: 'RCTCODIGO' })
  rctcodigo: number;

  @Column('datetime', { name: 'RCTDTBASE' })
  rctdtbase: Date;

  @Column('char', { name: 'RCTESTAGIO', length: 2 })
  rctestagio: string;

  @Column('datetime', { name: 'RCTDHINCLUSAO', nullable: true })
  rctdhinclusao: Date | null;

  @Column('datetime', { name: 'RCTDHALTERACAO', nullable: true })
  rctdhalteracao: Date | null;

  @OneToMany(() => TimctrEntity, (timctrEntity) => timctrEntity.ctrrenovacao2)
  timctrs: TimctrEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timrcts)
  @JoinColumn([{ name: 'RCTCODUSUALTERACAO', referencedColumnName: 'codusu' }])
  rctcodusualteracao: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timrcts2)
  @JoinColumn([{ name: 'RCTCODUSUINCLUSAO', referencedColumnName: 'codusu' }])
  rctcodusuinclusao: TsiusuEntity;
}
