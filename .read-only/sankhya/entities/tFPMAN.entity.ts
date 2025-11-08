import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpturEntity } from './tFPTUR.entity';
import { TfpocoEntity } from './tFPOCO.entity';
import { TfpocorjsEntity } from './tFPOCORJS.entity';

@Index('PK_TFPMAN', ['numanejo'], { unique: true })
@Index('TFPMAN_I01', ['numanejoorig'], {})
@Index('TFPMAN_I02', ['codemp', 'codfunc', 'dtmov'], {})
@Entity('TFPMAN', { schema: 'SANKHYA' })
export class TfpmanEntity {
  @Column('int', { primary: true, name: 'NUMANEJO' })
  numanejo: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DTMOV' })
  dtmov: Date;

  @Column('int', { name: 'NUMANEJOORIG' })
  numanejoorig: number;

  @Column('char', { name: 'FOLGA', length: 1, default: () => "'N'" })
  folga: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpmen)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpturEntity, (tfpturEntity) => tfpturEntity.tfpmen)
  @JoinColumn([
    { name: 'NUESCALA', referencedColumnName: 'nuescala' },
    { name: 'NUMTURMA', referencedColumnName: 'numturma' },
  ])
  tfptur: TfpturEntity;

  @OneToMany(() => TfpocoEntity, (tfpocoEntity) => tfpocoEntity.numanejo)
  tfpocos: TfpocoEntity[];

  @OneToMany(
    () => TfpocorjsEntity,
    (tfpocorjsEntity) => tfpocorjsEntity.numanejo,
  )
  tfpocorjs: TfpocorjsEntity[];
}
