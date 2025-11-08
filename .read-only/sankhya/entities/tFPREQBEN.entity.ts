import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfptbeEntity } from './tFPTBE.entity';
import { TfpbenEntity } from './tFPBEN.entity';
import { TfpreqbendpdEntity } from './tFPREQBENDPD.entity';
import { TfpreqbenvaleEntity } from './tFPREQBENVALE.entity';

@Index('PK_TFPREQBEN_SEQ', ['id'], { unique: true })
@Entity('TFPREQBEN', { schema: 'SANKHYA' })
export class TfpreqbenEntity {
  @Column('smallint', { primary: true, name: 'ID' })
  id: number;

  @Column('smallint', { name: 'REQGROUP', nullable: true })
  reqgroup: number | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpreqbens)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TfptbeEntity, (tfptbeEntity) => tfptbeEntity.tfpreqbens)
  @JoinColumn([{ name: 'CODTBE', referencedColumnName: 'codtbe' }])
  codtbe: TfptbeEntity;

  @ManyToOne(() => TfpbenEntity, (tfpbenEntity) => tfpbenEntity.tfpreqbens)
  @JoinColumn([{ name: 'CODBEN', referencedColumnName: 'codben' }])
  codben: TfpbenEntity;

  @OneToMany(
    () => TfpreqbendpdEntity,
    (tfpreqbendpdEntity) => tfpreqbendpdEntity.reqben,
  )
  tfpreqbendpds: TfpreqbendpdEntity[];

  @OneToMany(
    () => TfpreqbenvaleEntity,
    (tfpreqbenvaleEntity) => tfpreqbenvaleEntity.reqben,
  )
  tfpreqbenvales: TfpreqbenvaleEntity[];
}
