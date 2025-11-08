import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfphisEntity } from './tFPHIS.entity';

@Index('PK_TFPAPO', ['nuajuste'], { unique: true })
@Entity('TFPAPO', { schema: 'SANKHYA' })
export class TfpapoEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'NUAJUSTE' })
  nuajuste: number;

  @Column('datetime', { name: 'DHSOLICIT' })
  dhsolicit: Date;

  @Column('datetime', { name: 'DHAJUSTADA' })
  dhajustada: Date;

  @Column('varchar', { name: 'CAMPOAJUSTADO', length: 10 })
  campoajustado: string;

  @Column('varchar', { name: 'OBSERVACAO', length: 3103 })
  observacao: string;

  @Column('varchar', { name: 'TIPO', length: 1, default: () => "'P'" })
  tipo: string;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @ManyToOne(() => TfphisEntity, (tfphisEntity) => tfphisEntity.tfpapos)
  @JoinColumn([{ name: 'CODHISTOCOR', referencedColumnName: 'codhistocor' }])
  codhistocor: TfphisEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpapos)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
