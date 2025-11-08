import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfiapurstmedentEntity } from './tGFIAPURSTMEDENT.entity';

@Index('PK_TGFAPURSTMEDENT', ['nuapur'], { unique: true })
@Entity('TGFAPURSTMEDENT', { schema: 'SANKHYA' })
export class TgfapurstmedentEntity {
  @Column('int', { primary: true, name: 'NUAPUR' })
  nuapur: number;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('int', { name: 'OPCAPUR', nullable: true })
  opcapur: number | null;

  @Column('int', { name: 'OPCMARC', nullable: true })
  opcmarc: number | null;

  @Column('datetime', { name: 'DTAPUR', nullable: true })
  dtapur: Date | null;

  @Column('datetime', { name: 'DHSOLICT', nullable: true })
  dhsolict: Date | null;

  @Column('datetime', { name: 'DHFIMAPUR', nullable: true })
  dhfimapur: Date | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @OneToMany(
    () => TgfiapurstmedentEntity,
    (tgfiapurstmedentEntity) => tgfiapurstmedentEntity.nuapur2,
  )
  tgfiapurstmedents: TgfiapurstmedentEntity[];
}
