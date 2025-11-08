import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';

@Index('PK_TFPCTG', ['codcategesocial'], { unique: true })
@Entity('TFPCTG', { schema: 'SANKHYA' })
export class TfpctgEntity {
  @Column('int', { primary: true, name: 'CODCATEGESOCIAL' })
  codcategesocial: number;

  @Column('varchar', { name: 'DESCRCATEGESOCIAL', length: 250 })
  descrcategesocial: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('datetime', { name: 'DTTERMINO', nullable: true })
  dttermino: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpctgs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(
    () => TfpfunEntity,
    (tfpfunEntity) => tfpfunEntity.codcategesocial2,
  )
  tfpfuns: TfpfunEntity[];

  @OneToMany(
    () => TfpfunEntity,
    (tfpfunEntity) => tfpfunEntity.codcategtrabcedido,
  )
  tfpfuns2: TfpfunEntity[];

  @OneToMany(
    () => TfpreqadmEntity,
    (tfpreqadmEntity) => tfpreqadmEntity.codcategesocial,
  )
  tfpreqadms: TfpreqadmEntity[];
}
