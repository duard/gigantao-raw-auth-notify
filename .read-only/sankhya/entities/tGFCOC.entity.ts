import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsictaEntity } from './tSICTA.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfcpcEntity } from './tGFCPC.entity';

@Index('PK_TGFCOC', ['codctabcoint', 'convenio'], { unique: true })
@Entity('TGFCOC', { schema: 'SANKHYA' })
export class TgfcocEntity {
  @Column('smallint', { primary: true, name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('float', { primary: true, name: 'CONVENIO', precision: 53 })
  convenio: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { name: 'REMBCO', nullable: true })
  rembco: number | null;

  @Column('int', { name: 'REMBCOMAX', nullable: true })
  rembcomax: number | null;

  @Column('varchar', { name: 'ZERARAUT', length: 1, default: () => "'N'" })
  zeraraut: string;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfcocs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint2: TsictaEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcocs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgfcpcEntity, (tgfcpcEntity) => tgfcpcEntity.tgfcoc)
  tgfcpcs: TgfcpcEntity[];
}
