import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpfisEntity } from './tFPFIS.entity';

@Index('PK_TFPLTR', ['codltr'], { unique: true })
@Entity('TFPLTR', { schema: 'SANKHYA' })
export class TfpltrEntity {
  @Column('int', { primary: true, name: 'CODLTR' })
  codltr: number;

  @Column('varchar', { name: 'DESCRLTR', nullable: true, length: 100 })
  descrltr: string | null;

  @Column('smallint', { name: 'TIPLOTACAO' })
  tiplotacao: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codltr)
  tfpfuns: TfpfunEntity[];

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpltrs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TfpempEntity;

  @ManyToOne(() => TfpfisEntity, (tfpfisEntity) => tfpfisEntity.tfpltrs)
  @JoinColumn([{ name: 'CODREGFIS', referencedColumnName: 'codregfis' }])
  codregfis: TfpfisEntity;
}
