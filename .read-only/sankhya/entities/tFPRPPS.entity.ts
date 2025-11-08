import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TFPRPPS', ['codemp', 'tppubalvo'], { unique: true })
@Entity('TFPRPPS', { schema: 'SANKHYA' })
export class TfprppsEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'TPPUBALVO' })
  tppubalvo: number;

  @Column('varchar', { name: 'DESCSEGDIF', nullable: true, length: 250 })
  descsegdif: string | null;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfprpps)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
