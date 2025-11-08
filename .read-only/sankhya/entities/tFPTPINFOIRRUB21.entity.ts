import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfptpinfoirEntity } from './tFPTPINFOIR.entity';

@Index('PK_CODTPINFOIRRUB21', ['codtpinfoirrub21'], { unique: true })
@Entity('TFPTPINFOIRRUB21', { schema: 'SANKHYA' })
export class Tfptpinfoirrub21Entity {
  @Column('varchar', { primary: true, name: 'CODTPINFOIRRUB21', length: 4 })
  codtpinfoirrub21: string;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;

  @ManyToOne(
    () => TfptpinfoirEntity,
    (tfptpinfoirEntity) => tfptpinfoirEntity.tfptpinfoirrubs,
  )
  @JoinColumn([{ name: 'CODTPINFOIR', referencedColumnName: 'codtpinfoir' }])
  codtpinfoir: TfptpinfoirEntity;
}
