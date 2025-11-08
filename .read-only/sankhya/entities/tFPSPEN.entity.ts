import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpfilaesocialEntity } from './tFPFILAESOCIAL.entity';

@Index('PK_TFPSPEN', ['id'], { unique: true })
@Entity('TFPSPEN', { schema: 'SANKHYA' })
export class TfpspenEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('datetime', { name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { name: 'EVENTO', length: 100 })
  evento: string;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 3103 })
  chave: string | null;

  @Column('datetime', { name: 'DTAGENDAMENTO', nullable: true })
  dtagendamento: Date | null;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @OneToMany(
    () => TfpfilaesocialEntity,
    (tfpfilaesocialEntity) => tfpfilaesocialEntity.idtfpspen,
  )
  tfpfilaesocials: TfpfilaesocialEntity[];

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpspens)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TfpempEntity;
}
