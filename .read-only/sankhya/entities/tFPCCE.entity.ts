import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpempEntity } from './tFPEMP.entity';
import { TfpcrrEntity } from './tFPCRR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPCCE', ['codcarreira', 'codemp'], { unique: true })
@Entity('TFPCCE', { schema: 'SANKHYA' })
export class TfpcceEntity {
  @Column('int', { primary: true, name: 'CODCARREIRA' })
  codcarreira: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { name: 'ENVESOCIAL', length: 1, default: () => "'N'" })
  envesocial: string;

  @Column('varchar', { name: 'RECIBOESOCIAL', nullable: true, length: 40 })
  reciboesocial: string | null;

  @Column('datetime', { name: 'INIVALESOCIAL', nullable: true })
  inivalesocial: Date | null;

  @Column('datetime', { name: 'FIMVALESOCIAL', nullable: true })
  fimvalesocial: Date | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpcces)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TfpcrrEntity, (tfpcrrEntity) => tfpcrrEntity.tfpcces, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCARREIRA', referencedColumnName: 'codcarreira' }])
  codcarreira2: TfpcrrEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpcces)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
