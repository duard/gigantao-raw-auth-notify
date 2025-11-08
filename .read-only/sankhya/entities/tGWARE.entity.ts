import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgweqpEntity } from './tGWEQP.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgwittEntity } from './tGWITT.entity';

@Index('PK_TGWARE', ['codarmazenagem'], { unique: true })
@Entity('TGWARE', { schema: 'SANKHYA' })
export class TgwareEntity {
  @Column('int', { primary: true, name: 'CODARMAZENAGEM' })
  codarmazenagem: number;

  @Column('char', { name: 'SITUACAO', length: 1 })
  situacao: string;

  @ManyToOne(() => TgweqpEntity, (tgweqpEntity) => tgweqpEntity.tgwares)
  @JoinColumn([{ name: 'CODEQUIP', referencedColumnName: 'codequip' }])
  codequip: TgweqpEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwares)
  @JoinColumn([{ name: 'CODENDDOCA', referencedColumnName: 'codend' }])
  codenddoca: TgwendEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwares)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgwittEntity, (tgwittEntity) => tgwittEntity.codarmazenagem)
  tgwitts: TgwittEntity[];
}
