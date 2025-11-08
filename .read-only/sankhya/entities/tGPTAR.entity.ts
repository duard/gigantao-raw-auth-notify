import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgpfctEntity } from './tGPFCT.entity';
import { TgpicpEntity } from './tGPICP.entity';
import { TgpescEntity } from './tGPESC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgptcpEntity } from './tGPTCP.entity';
import { TgptprEntity } from './tGPTPR.entity';

@Index('PK_TGPTAR', ['codtarefa'], { unique: true })
@Entity('TGPTAR', { schema: 'SANKHYA' })
export class TgptarEntity {
  @Column('int', { primary: true, name: 'CODTAREFA' })
  codtarefa: number;

  @Column('varchar', { name: 'DESCRTAREFA', nullable: true, length: 100 })
  descrtarefa: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(() => TgpfctEntity, (tgpfctEntity) => tgpfctEntity.codtarefa2)
  tgpfcts: TgpfctEntity[];

  @OneToMany(() => TgpicpEntity, (tgpicpEntity) => tgpicpEntity.codtarefa)
  tgpicps: TgpicpEntity[];

  @ManyToOne(() => TgpescEntity, (tgpescEntity) => tgpescEntity.tgptars)
  @JoinColumn([{ name: 'CODESCALA', referencedColumnName: 'codescala' }])
  codescala: TgpescEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgptars)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TgptcpEntity, (tgptcpEntity) => tgptcpEntity.codtarefa2)
  tgptcps: TgptcpEntity[];

  @OneToMany(() => TgptprEntity, (tgptprEntity) => tgptprEntity.codtarefa2)
  tgptprs: TgptprEntity[];
}
