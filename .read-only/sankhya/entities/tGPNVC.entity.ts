import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpcarEntity } from './tFPCAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgprepEntity } from './tGPREP.entity';

@Index('PK_TGPNVC', ['codcargo', 'codnivel'], { unique: true })
@Entity('TGPNVC', { schema: 'SANKHYA' })
export class TgpnvcEntity {
  @Column('int', { primary: true, name: 'CODCARGO' })
  codcargo: number;

  @Column('int', { primary: true, name: 'CODNIVEL' })
  codnivel: number;

  @Column('char', { name: 'POSSUIREP', length: 1, default: () => "'N'" })
  possuirep: string;

  @Column('smallint', { name: 'ORDEM' })
  ordem: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tgpnvcs)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo2: TfpcarEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpnvcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgprepEntity, (tgprepEntity) => tgprepEntity.tgpnvc)
  tgpreps: TgprepEntity[];
}
