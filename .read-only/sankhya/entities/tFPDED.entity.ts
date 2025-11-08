import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TFPDED', ['referencia', 'codemp', 'codparc'], { unique: true })
@Entity('TFPDED', { schema: 'SANKHYA' })
export class TfpdedEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('datetime', { name: 'REFERENCIAORIG', nullable: true })
  referenciaorig: Date | null;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpdeds)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tfpdeds)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
