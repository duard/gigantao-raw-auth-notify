import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpeveEntity } from './tFPEVE.entity';

@Index('PK_TFPEBA', ['codeventoacum', 'codeventocomp'], { unique: true })
@Index('TFPEBA_I01', ['codeventocomp', 'codeventoacum'], {})
@Entity('TFPEBA', { schema: 'SANKHYA' })
export class TfpebaEntity {
  @Column('smallint', { primary: true, name: 'CODEVENTOACUM' })
  codeventoacum: number;

  @Column('smallint', { primary: true, name: 'CODEVENTOCOMP' })
  codeventocomp: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpebas)
  @JoinColumn([{ name: 'CODEVENTOACUM', referencedColumnName: 'codevento' }])
  codeventoacum2: TfpeveEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpebas2)
  @JoinColumn([{ name: 'CODEVENTOCOMP', referencedColumnName: 'codevento' }])
  codeventocomp2: TfpeveEntity;
}
