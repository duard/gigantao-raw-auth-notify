import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGPNIV', ['codnivel'], { unique: true })
@Entity('TGPNIV', { schema: 'SANKHYA' })
export class TgpnivEntity {
  @Column('int', { primary: true, name: 'CODNIVEL' })
  codnivel: number;

  @Column('varchar', { name: 'DESCRNIVEL', length: 15 })
  descrnivel: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codnivel)
  tfpfuns: TfpfunEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpnivs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
